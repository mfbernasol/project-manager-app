'use client'

import {register, signin} from "@/lib/api"
import {useRouter} from "next/navigation"
import { useCallback, useState } from "react"
import Input from "./Input"
import Button from "./Button"
import Card from "./Card"

const registerContent = {
    linkurl: "/signin",
    linkText: "Already have an account?",
    header: "Create a new account",
    subheader: "Just a few things to get started"
}