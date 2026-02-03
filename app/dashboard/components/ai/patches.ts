export type Patch = {
  id: string
  filePath: string
  search: string
  replace: string
}

export const patches: Patch[] = [
  {
    id: "dashboard-container-grid",
    filePath: "app/dashboard/page.tsx",
    search: `<div className="dashboard-container">`,
    replace: `<div className="dashboard-container grid grid-cols-12 gap-4">`
  },
  {
    id: "card-base-style",
    filePath: "app/dashboard/page.tsx",
    search: `<div className="card">`,
    replace: `<div className="card col-span-4 p-4 rounded-xl bg-zinc-900">`
  }
]
