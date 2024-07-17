import { IData } from './types'

export function getGridAreas(data: IData[]) {
  const len = data.length
  const isEven = len % 2 === 0

  return data.map((_, ind) => {
    if (ind === 0) return 'start'
    else if (isEven && ind === len - 1) return 'end'
    else return `s${ind}`
  })
}

export function getGridTemplateAreas(areas: ReturnType<typeof getGridAreas>) {
  let res = ''

  for (let [ind, area] of Object.entries(areas)) {
    if (area === 'start') res += `"start start" `
    if (area === 'end') res += `"end end"`
    if (!res.includes(area)) res += `"${area} ${areas[parseInt(ind) + 1]}" `
  }

  return res
}
