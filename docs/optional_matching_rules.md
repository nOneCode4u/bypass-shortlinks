# Optional Matching Rules

Some sites have bypasses but are **disabled by default** because they are sensitive (social media, general-purpose sites).

You can manually enable them in Violentmonkey:

1. Open Violentmonkey dashboard
2. Click the **gear icon** next to this script → **Edit**
3. Go to the **Settings** tab
4. Add entries to **Includes** or **Matches**

## Examples

### Enable YouTube redirect shortcut handling
```
*://www.youtube.com/*
```

### Enable Google redirect bypass
```
*://www.google.com/url?*
```

These are disabled by default to avoid interfering with normal browsing on these sites.
