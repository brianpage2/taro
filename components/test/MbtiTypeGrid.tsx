const MBTI_NICKNAMES: Record<string, string> = {
  ISTJ: '잇티제', ISTP: '잇팁', ISFJ: '잇프제', ISFP: '잇프피',
  INTJ: '인티제', INTP: '인팁', INFJ: '인프제', INFP: '인프피',
  ESTJ: '엣티제', ESTP: '엣팁', ESFJ: '엣프제', ESFP: '엣프피',
  ENTJ: '엔티제', ENTP: '엔팁', ENFJ: '엔프제', ENFP: '엔프피',
}

interface Props {
  activeType?: string
}

export default function MbtiTypeGrid({ activeType }: Props) {
  const th = 'p-2 text-center font-semibold text-[12px] leading-none'
  const border = 'border border-white/10'

  const cell = (type: string) => {
    const isActive = type === activeType
    return (
      <td
        key={type}
        className={`${border} p-2.5 text-center transition-colors ${
          isActive ? 'bg-primary' : ''
        }`}
      >
        <div
          className={`font-semibold text-[12px] mb-0.5 ${isActive ? 'text-white' : 'text-white/80'}`}
        >
          {type}
        </div>
        <div className={`text-[11px] ${isActive ? 'text-white/90' : 'text-[#888]'}`}>
          {MBTI_NICKNAMES[type]}
        </div>
      </td>
    )
  }

  return (
    <div className="overflow-x-auto rounded-apple overflow-hidden">
      <table className="w-full border-collapse" style={{ background: '#16161e' }}>
        <thead>
          <tr>
            <th colSpan={2} className={`${border} ${th} text-[#666] py-3`}>구분</th>
            <th colSpan={2} className={`${border} ${th} text-[#22d3ee] py-3`}>T</th>
            <th colSpan={2} className={`${border} ${th} text-[#22d3ee] py-3`}>F</th>
          </tr>
          <tr>
            <th colSpan={2} className={`${border} p-2`}></th>
            <th className={`${border} ${th} text-[#22d3ee] py-2.5`}>J</th>
            <th className={`${border} ${th} text-[#22d3ee] py-2.5`}>P</th>
            <th className={`${border} ${th} text-[#22d3ee] py-2.5`}>J</th>
            <th className={`${border} ${th} text-[#22d3ee] py-2.5`}>P</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={2} className={`${border} ${th} text-[#f87171] w-8`}>I</th>
            <th className={`${border} ${th} text-[#f87171] w-8`}>S</th>
            {cell('ISTJ')}{cell('ISTP')}{cell('ISFJ')}{cell('ISFP')}
          </tr>
          <tr>
            <th className={`${border} ${th} text-[#f87171]`}>N</th>
            {cell('INTJ')}{cell('INTP')}{cell('INFJ')}{cell('INFP')}
          </tr>
          <tr>
            <th rowSpan={2} className={`${border} ${th} text-[#f87171]`}>E</th>
            <th className={`${border} ${th} text-[#f87171]`}>S</th>
            {cell('ESTJ')}{cell('ESTP')}{cell('ESFJ')}{cell('ESFP')}
          </tr>
          <tr>
            <th className={`${border} ${th} text-[#f87171]`}>N</th>
            {cell('ENTJ')}{cell('ENTP')}{cell('ENFJ')}{cell('ENFP')}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
