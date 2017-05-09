import { FormControl, FormGroup } from '@angular/forms';

export class BasicValidators {
    static email(control: FormControl) {
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }
}

export class ValidMobileNumberValidator {
    static onlyvalidmobilenumber(control: FormControl) {
        let regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        let valid = regex.test(control.value);
        return valid ? null : { onlyvalidmobilenumber: true };
    }
}


export class OnlyNumberValidator {
    static insertonlynumber(control: FormControl) {
        let regex = /^[0-9]*(?:\.\d{1,2})?$/;
        let valid = regex.test(control.value);
        return valid ? null : { insertonlynumber: true };
    }
}

export class OnlyNumberOrDecimalValidator {
    static insertonlynumberordecimal(control: FormControl) {
        let regex = /^[0-9]+([,.][0-9]+)?$/g;
        let valid = regex.test(control.value);
        return valid ? null : { insertonlynumberordecimal: true };
    }
}


export class ValidUrlValidator {
    static insertonlyvalidurl(control: FormControl) {
        if (control.value) {
            let urltype;

            if (control.value.startsWith('http://')) {
                urltype = 'http://';
            }
            if (control.value.startsWith('https://')) {
                urltype = 'https://';
            }
            if (urltype) {
                let str = control.value.split(urltype);
                let regex = /(http(s)?:\\)?([\w-]+\.)+[\w-]+[.com|.in|.org]+(\[\?%&=]*)?/;
                let valid = regex.test(str[1]);

                if (valid == true) {
                    if (str[1]) {
                        let strurl = str[1].split('.');

                        let resstrurl;
                        if (str[1].startsWith('www.')) {
                            resstrurl = strurl[2];
                        } else {
                            resstrurl = strurl[1];
                        }
                        if (resstrurl) {
                            let strpage = resstrurl.split('/');

                            if (strpage[0].length == 2 || strpage[0].length == 3) {
                                return null;
                            } else {
                                return { insertonlyvalidurl: true };
                            }
                        } else {
                            return { insertonlyvalidurl: true };
                        }
                    } else {
                        return { insertonlyvalidurl: true };
                    }
                } else {
                    return { insertonlyvalidurl: true };
                }
            } else {
                return { insertonlyvalidurl: true };
            }
        } else {
            return null;
        }
    }
}

export class ValidPercValidator {
    static insertonlyvalidperc(control: FormControl) {
        if (control.value) {
            if (control.value <= 100) {
                return null;
            } else {
                return { insertonlyvalidperc: true };
            }
        } else {
            return null;
        }
    }
}

function equalValidator({value}: FormControl): { [key: string]: any } {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : { equalValidator: true };
}

export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
}