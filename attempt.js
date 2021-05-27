module.exports.attempt = function (available, allowed, preffered) {
  //----------------------if allowed has 'any'-------------
  if (allowed.includes('any')) {
    allowed.splice(allowed.indexOf('any'), 1)
    for (let i = available.indexOf(allowed[0]) + 1; i < available.length; i++)
      allowed.push(available[i])
  }
  //------------------------------------------------------
  let result = []
  let interSection = available.filter(x => allowed.includes(x)) // union operarion -> /
  //----------------------if preffered has 'any'-------------
  if (preffered.includes('any')) return interSection
  //------------------------------------------
  if (interSection.length == 0) return []
  let closestLeft = interSection.filter(num => num <= preffered[0])
  result.push(Math.min(...closestLeft))
  //---------------if preffered has more than 1 element------------------------
  if (preffered.length > 1) {
    let closestRight = interSection.filter(
      num => num <= preffered[preffered.length - 1]
    )
    if (
      (interSection[interSection.length - 1] >
        preffered[preffered.length - 1]) &
      !interSection.includes(preffered[preffered.length - 1])
    )
      result.push(interSection[interSection.length - 1])
    else result.push(Math.max(...closestRight))
  }
  //--------------------------------------------------------------
  result = Array.from(new Set(result)) //state only uniqe elements of the result array
  if (Math.max(...allowed) <= preffered[0]) result = [Math.max(...result)]

  return result
}
