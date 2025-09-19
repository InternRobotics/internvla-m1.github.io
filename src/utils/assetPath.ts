/**
 * Get the correct asset path for static resources
 * Handles base URL configuration for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
    // In development mode, use root path
    // In production (GitHub Pages), use the repository base path
    const base = import.meta.env.DEV ? '' : '/internvla-m1.github.io/';
    return base + path;
}
