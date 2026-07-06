import { onMounted, ref } from "vue";
const logo = ref("");
const name = ref("");
const title = ref("");
const description = ref("");
const isLoading = ref(false);
const copyMessage = ref("Copy URL");
const fetchRandomLogo = async () => {
    isLoading.value = true;
    try {
        const res = await fetch("https://www.logotypes.dev/random/data");
        if (!res.ok)
            throw new Error("Network");
        const data = await res.json();
        // API returns an object like the example in the user's message
        logo.value = data.logo ?? data.logo ?? "";
        name.value = data.name ?? "";
        title.value = data.example_title ?? "";
        description.value = data.example_description ?? "";
    }
    catch (e) {
        logo.value = "";
        name.value = "Unavailable";
        title.value = "";
        description.value = "";
    }
    finally {
        isLoading.value = false;
    }
};
const copyUrl = async () => {
    try {
        await navigator.clipboard.writeText(logo.value);
        copyMessage.value = "Copied!";
        setTimeout(() => (copyMessage.value = "Copy URL"), 1200);
    }
    catch {
        copyMessage.value = "Copy failed";
    }
};
onMounted(fetchRandomLogo);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-card']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-preview']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-page" },
});
/** @type {__VLS_StyleScopedClasses['logo-page']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "muted" },
});
/** @type {__VLS_StyleScopedClasses['muted']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-card" },
});
/** @type {__VLS_StyleScopedClasses['logo-card']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-preview" },
});
/** @type {__VLS_StyleScopedClasses['logo-preview']} */ ;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "placeholder" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
}
else if (__VLS_ctx.logo) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.img)({
        src: (__VLS_ctx.logo),
        alt: (__VLS_ctx.name),
    });
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "placeholder" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-meta" },
});
/** @type {__VLS_StyleScopedClasses['logo-meta']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({
    ...{ class: "brand-name" },
});
/** @type {__VLS_StyleScopedClasses['brand-name']} */ ;
(__VLS_ctx.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "brand-title" },
});
/** @type {__VLS_StyleScopedClasses['brand-title']} */ ;
(__VLS_ctx.title);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "brand-desc" },
});
/** @type {__VLS_StyleScopedClasses['brand-desc']} */ ;
(__VLS_ctx.description);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "logo-actions" },
});
/** @type {__VLS_StyleScopedClasses['logo-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.fetchRandomLogo) },
    ...{ class: "secondary" },
});
/** @type {__VLS_StyleScopedClasses['secondary']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: (__VLS_ctx.logo),
    target: "_blank",
    rel: "noreferrer",
    ...{ class: "link-btn" },
});
/** @type {__VLS_StyleScopedClasses['link-btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.copyUrl) },
    ...{ class: "primary" },
});
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
(__VLS_ctx.copyMessage);
// @ts-ignore
[isLoading, logo, logo, logo, name, name, title, description, fetchRandomLogo, copyUrl, copyMessage,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
