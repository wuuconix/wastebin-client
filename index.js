#!/usr/bin/env node

const { readFileSync } = require("fs")
const data = readFileSync(0, "utf-8") //得到stdin中传入的字符
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

fetch("https://paste.wuuconix.link/documents", {
    method: "POST",
    body: new URLSearchParams({data})
}).then(res => res.json()).then(res => {
    const filename = res.filename
    console.log(`https://paste.wuuconix.link/${filename}`)
})
