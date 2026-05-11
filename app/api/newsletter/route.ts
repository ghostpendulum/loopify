import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"

const notionToken = process.env.NOTION_API_KEY
const notionDatabaseId = process.env.NOTION_NEWSLETTER_DATABASE_ID
const notionTitleProperty = process.env.NOTION_NEWSLETTER_TITLE_PROPERTY || "Name"
const notionEmailProperty = process.env.NOTION_NEWSLETTER_EMAIL_PROPERTY || "Email"

const notionClient = notionToken ? new Client({ auth: notionToken }) : null

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(request: Request) {
  if (!notionClient || !notionDatabaseId) {
    return NextResponse.json({ error: "Notion integration is not configured." }, { status: 500 })
  }

  try {
    const body = await request.json()
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : ""

    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    await notionClient.pages.create({
      parent: { database_id: notionDatabaseId },
      properties: {
        [notionTitleProperty]: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        [notionEmailProperty]: {
          email,
        },
      },
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to subscribe email." }, { status: 500 })
  }
}
