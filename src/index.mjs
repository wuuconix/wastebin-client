#!/usr/bin/env node

import { readFile } from "fs/promises"
import { basename } from "path"
const path = process.argv[2]
const code = await readFile(path, { encoding: "utf-8" })
const res = await (await fetch(`https://paste.wuuconix.link/add/${basename(path)}`, {
  method: "post",
  body: new URLSearchParams({ code })
})).json()
console.log(res)