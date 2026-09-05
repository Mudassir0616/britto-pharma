
export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone) => {
    return /^[0-9]{7,15}$/.test(phone);
    // 7–15 digits → works globally, not just India
};

export async function fetchSeoHeads(locale) {
    try {
        const res = await fetch(
            "https://api.gammabiotechs.com/api/head/");

        if (!res.ok) {
            console.error("SEO API failed:", res.status);
            return [];
        }

        const data = await res.json();
        return data?.results || [];
    } catch (error) {
        console.error("fetchSeoHeads:", error);
        return [];
    }
}

export async function fetchGlobalHead(locale) {
    try {
        const res = await fetch(
            "https://api.gammabiotechs.com/api/site-setting/",
            {
                headers: {
                    "X-Language": locale || "en",
                },
            }
        );

        if (!res.ok) {
            console.error("Settings API failed:", res.status);
            return null;
        }

        const data = await res.json();

        return data?.results?.[0]?.global_head || null;
    } catch (error) {
        console.error("fetchGlobalHead:", error);
        return null;
    }
}

export function normalizePath(input) {
    if (!input) return "/";

    try {
        // If backend gives full URL
        if (input.startsWith("http")) {
            const url = new URL(input);
            return url.pathname.replace(/\/$/, "") || "/";
        }

        // If frontend path
        return input.split("?")[0].replace(/\/$/, "") || "/";
    } catch {
        return "/";
    }
}