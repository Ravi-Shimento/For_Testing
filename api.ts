api.ts_________>>>>>>>
export async function readBDDTestResources(
  workspacePath: string
): Promise<{ path: string; content: string }[]> {
  const ig = loadGitIgnore(workspacePath);
  const files: { path: string; content: string }[] = [];

  const targetDir = path.join(workspacePath, "BDD_Test_Resources");

  if (!fs.existsSync(targetDir)) {
    return files;
  }

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, entry);
      const relPath = path.relative(workspacePath, fullPath);

      if (ig.ignores(relPath)) continue;

      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (stat.isFile()) {
        files.push({
          // ✅ FILE PATH IS INCLUDED
          path: relPath.replace(/\\/g, "/"),

          // ✅ FILE CONTENT IS INCLUDED (Base64 for all files)
          content: fs.readFileSync(fullPath).toString("base64")
        });
      }
    }
  }

  walk(targetDir);
  return files;
}

// ADD this before axios.post
const bddResources = await readBDDTestResources(workspacePath);


// ADD bdd_resources to request body
const response = await axios.post(
  `${getBaseApi()}/testgenie/executebdd`,
  {
    feature_text,
    specContent,
    env: envContent,

    // 👇 NEW
    bdd_resources: bddResources
  },
  {
    headers: getAuthHeaders(authToken),
    signal: options?.signal,
    maxBodyLength: Infinity,
    maxContentLength: Infinity
  }
);

