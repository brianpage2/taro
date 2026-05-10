import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: 'linear-gradient(135deg, #0066cc 0%, #5b21b6 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <div style={{ fontSize: 80, display: 'flex' }}>🧠</div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#ffffff',
            fontFamily: 'system-ui, sans-serif',
            display: 'flex',
            letterSpacing: '-1px',
          }}
        >
          심리테스트
        </div>
      </div>
    ),
    { ...size }
  )
}
