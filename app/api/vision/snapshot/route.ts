import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST() {
  const snapshot = {
    timestamp: new Date().toISOString(),
    route: "/dashboard",
    notes: [
      "Snapshot inicial do layout",
      "Coletado via API server-side"
    ]
  }

  const dir = path.join(process.cwd(), "logs")
  const file = path.join(dir, "layout-snapshot.json")

  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync(file, JSON.stringify(snapshot, null, 2))

  return NextResponse.json({ ok: true, saved: "logs/layout-snapshot.json" })
}
