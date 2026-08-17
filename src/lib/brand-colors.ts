export const BRAND_COLORS: Record<string, string> = {
  nuxtdotjs: "#00DC82",
  vuedotjs: "#4FC08D",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  tailwindcss: "#06B6D4",
  html5: "#E34F26",
  css3: "#1572B6",
  svelte: "#FF3E00",
  nodedotjs: "#339933",
  nestjs: "#E0234E",
  swagger: "#85EA2D",
  graphql: "#E10098",
  php: "#777BB4",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  python: "#3776AB",
  pandas: "#150458",
  scikitlearn: "#F7931E",
  openai: "#10A37F",
  git: "#F05032",
  github: "#181717",
  githubactions: "#2088FF",
  docker: "#2496ED",
  figma: "#F24E1E",
  jest: "#C21325",
  wordpress: "#21759B",
  woocommerce: "#96588A",
};

/** رنگ برند یه تکنولوژی؛ برای آیکون‌های ناشناس، خاکستری خنثی برمی‌گردونه */
export function brandColor(icon: string): string {
  return BRAND_COLORS[icon] ?? "#64748B";
}