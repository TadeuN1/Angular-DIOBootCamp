

    function apiVersion(version: string){
        return (target: any) => {
            Object.assign(target.prototype, {__version: version});
        };
    }

    function minLength(length: number){
        return (target: any, key: string) => {
            let _value = target[key];

            const getter = () => _value;
            const setter = (value: string) =>{
                if(value.length < length){
                    throw new Error(`Tamnho menor do que ${length}`);
                }else {
                    _value = value;
                }
            };

            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
            });
        }
    }

    @apiVersion("1.10")
    class Api{
        @minLength(3)
        name: string;
        constructor(name:string){
            this.name = name;
        }
    }

    const api = new Api("usu");
    console.log(api.name)

