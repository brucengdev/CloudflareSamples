
export function buildParams(url: string): Record<string, string> {
    const result: Record<string, string> = {}
	const paramsStr = url.split("?")[1]
    if(paramsStr === undefined) { return result }
    const paramPairs = paramsStr.split("&")
    paramPairs
    .filter(paramPair => paramPair !== "")
    .forEach(paramStr => {
        const [name, value] = paramStr.split("=")
        result[name] = value
    })
	return result
}
