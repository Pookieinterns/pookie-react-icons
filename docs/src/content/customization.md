# Customization

One of the best features of **Pookie React Icons** is how easily you can customize them to match your design system.

## Props

Every icon accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `string \| number` | `'1em'` | Sets the height and width of the icon. |
| `color` | `string` | `'currentColor'` | Sets the fill or stroke color. |
| `title` | `string` | `undefined` | Adds an accessible `<title>` tag for screen readers. |

## Examples

### Changing Size
You can pass numbers (interpreted as pixels) or strings (like `rem`, `em`, `%`).

```jsx
<Home size={32} />
<Search size="2rem" />
```

### Changing Color
Icons use `currentColor` by default, meaning they match your text color. You can override this easily:

```jsx
<Home color="#6366f1" />
<Github color="rgb(31, 41, 55)" />
```

### Accessibility
Provide a title for icons that convey meaning without text labels:

```jsx
<Search title="Search site" />
```
