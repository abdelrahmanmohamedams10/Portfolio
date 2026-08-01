declare module '*.pdf' {
  const src: string;
  export default src;
}

// src/declarations.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}