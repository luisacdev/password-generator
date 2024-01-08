export function evaluatePassword(password) {
    let securityScore = 0;

    const validationCriteria = [
        (pwd) => pwd.length >= 8,
        (pwd) => /[A-Z]/.test(pwd) && /[a-z]/.test(pwd),
        (pwd) => /\d/.test(pwd),
        (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwd)
    ];

    for (let validate of validationCriteria) {
        if (validate(password)) {
            securityScore++;
        }
    }

    const totalCriteria = validationCriteria.length;
    const percentage = (securityScore / totalCriteria) * 100;

    const securityLevels = [
        { threshold: 25, level: 1 },
        { threshold: 50, level: 2 },
        { threshold: 75, level: 3 },
        { threshold: 100, level: 4 }
    ];

    const level = securityLevels.slice().reverse().find(l => percentage >= l.threshold);
    return level ? level.level : 1;
}

export function generatePassword(length, options) {
    const characterSets = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{};:\'"\\|,.<>/?'
    };

    let validChars = '';

    for (const [charSet, include] of Object.entries(options)) {
        if (include) {
            validChars += characterSets[charSet];
        }
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    return password;
}