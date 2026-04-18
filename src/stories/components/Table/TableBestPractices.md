### Best Practices

#### Layout
- Use tables for structured data that needs to be compared or scanned quickly.
- Group related columns together to reduce eye travel.
- Use `sticky` headers for long tables to maintain context during scrolling.

#### Content
- Align numerical data to the right for easier vertical comparison.
- Use clear, concise column headers.
- Provide a clear "Empty State" if no data is available.

#### Tech Checklist
- [ ] Provide `aria-label` or `aria-labelledby` for the table.
- [ ] Use semantic `<thead>`, `<tbody>`, and `<tr>` elements (handled by Geist).
- [ ] Ensure any interactive elements in cells (buttons, links) have sufficient touch targets.
