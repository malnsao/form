class Schema {
    constructor(descriptor) {
        this.descriptor = descriptor;
    }
    validate(values) {
        return new Promise(async (resolve, reject) => {
            let errorFields = [];
            for (const name in this.descriptor) {
                let value = values[name]
                let rules = this.descriptor[name]
                let ruleKeys = Object.keys(rules)
                let errors = []
                for (let index = 0; index < ruleKeys.length; index++) {
                    let ruleKey = ruleKeys[index]
                    if (ruleKey === 'required') {
                        if (rules[ruleKey] && !value) {
                            errors.push(`${name} is required`)
                        }
                    } else if (ruleKey === 'min') {
                        if (value.length < rules[ruleKey]) {
                            errors.push(`${name} 最小是 ${rules[ruleKey]} 个字符`)
                        }
                    } else if (ruleKey === 'max') {
                        if (value.length > rules[ruleKey]) {
                            errors.push(`${name} 最多是 ${rules[ruleKey]} 个字符`)
                        }
                    } else if (ruleKey === 'validate') {
                        let validate = rules[ruleKey]
                        let result = await validate(value)
                        if (result.length > 0) {
                            errors.push(`${name} 不符合自定义`)
                        }
                    }
                }
                if (errors.length > 0) {
                    errorFields.push({ name, errors })
                }
            }
            if (errorFields.length > 0) {
                reject({ errorFields, values })
            } else {
                resolve(values)
            }
        })
    }
}

export default Schema