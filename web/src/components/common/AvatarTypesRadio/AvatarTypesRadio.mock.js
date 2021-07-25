export const standard = (/* vars, { ctx, req } */) => ({
  options: [
    { name: 'marble' },
    { name: 'beam' },
    { name: 'pixel' },
    { name: 'sunset' },
    { name: 'bauhaus' },
    { name: 'ring' },
  ],
  defaultValue: { name: 'beam' },
  onChange: (params) => {
    console.log(params)
  },
})
