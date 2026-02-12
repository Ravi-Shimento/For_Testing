#auth-key {
    width: 90px;              /* same width as Base URL label */
    height: 36px;             /* same height as other inputs */
    padding: 0 8px;
    border-radius: 6px;
    border: 1px solid #d0d0d0;
    font-size: 13px;
    font-weight: 600;
    background: #f5f5f5;      /* light grey to look like label */
    text-align: center;
    pointer-events: none;     /* makes it non-editable */
    box-sizing: border-box;
}
.form-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}
<input id="auth-key" value="Authorization" readonly />

