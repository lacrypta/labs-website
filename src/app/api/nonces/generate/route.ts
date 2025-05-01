import { randomBytes } from 'crypto'

export async function GET() {
  try {
    // Generate 100 random nonces
    const nonces = Array.from({ length: 100 }, () =>
      randomBytes(16).toString('hex')
    )

    // Create a text content from the nonces
    const fileContent = nonces.join('\n')

    // Return the file content as a response
    return new Response(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment; filename="nonces.txt"'
      }
    })
  } catch (error) {
    console.error('Error generating nonces:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
