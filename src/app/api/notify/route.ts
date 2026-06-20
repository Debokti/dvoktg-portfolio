import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    
    if (!webhookUrl) {
      console.log('Discord webhook URL not configured.')
      return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
    }

    // Get basic location info (these headers are provided automatically if deployed on Vercel)
    const ip = req.headers.get('x-forwarded-for') || 'Unknown IP'
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown City'
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown Country'
    
    // Optional: Avoid spamming yourself when testing locally
    if (ip === '::1' || ip.includes('127.0.0.1')) {
      return NextResponse.json({ success: true, message: 'Localhost ignored' })
    }

    const embed = {
      title: "🚀 New Portfolio Visitor!",
      color: 0xb265ff, // Matches your portfolio's purple accent
      fields: [
        { name: "Location", value: `${city}, ${country}`, inline: true },
        { name: "IP Address", value: ip, inline: true },
        { name: "Time", value: new Date().toLocaleString(), inline: false }
      ],
      footer: {
        text: "dvoktg-portfolio analytics"
      }
    }

    const payload = {
      username: "Portfolio Radar",
      embeds: [embed]
    }

    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!discordRes.ok) {
      console.error('Discord webhook error:', await discordRes.text())
      return NextResponse.json({ error: 'Failed to send webhook' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Notifier Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
