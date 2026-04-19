### Best Practices

#### Layout

- For the primary action in a group, use a `type="secondary"` or `type="success"` to draw attention.
- Limit the number of primary buttons per page to one. Multiple primary actions can confuse users.
- Use ghost buttons for secondary actions to maintain visual hierarchy.

#### Content

- Use clear, action-oriented labels (e.g., "Save Changes" instead of "OK").
- Button text should be short and predictable.
- If using an icon, ensure it clarifies the action rather than just decorating it.

#### Tech Checklist

- [ ] Ensure `aria-label` is provided if the button only contains an icon.
- [ ] Large touch targets should be maintained (auto-scaling handles this).
- [ ] Use `loading` state for any async operations to prevent double-submissions.
