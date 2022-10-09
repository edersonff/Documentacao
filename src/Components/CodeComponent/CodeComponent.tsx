import './CodeComponent.scss';
import Option from './Option/Option';

function CodeComponent({title} : {title: string}) {
    let code : any = `{
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    }`;
    code = code.split(RegExp('\n', 'g'));
    return (
    <div className='codecomponent-container'>
        <div className="codecomponent-title">
            <h1 className="title">
                {title}
            </h1>
            <div className="codecomponent-options">
                <Option color='#BA39AD' />
                <Option color='#3BBA39' />
                <Option color='#3955BA' />
                <Option color='#BA3939' />
            </div>
        </div>
        <div className="code-container">
            <div className="numbers">
                {code.map((code : string, i : number) => {
                    return(
                        <p>{i}</p>
                    )
                })}
            </div>
            <div className="code">
                {code.map((code : string, i : number) => {
                    const splits = ['"', '{', '}', ':', '[', ']', ',', '(', ')'];
                    // code.split(\s+).forEach((word : string) => {
                    //     if(splits.includes(word)) {
                    //         code = code.replace(word, '<span class="split">' + word + '</span>');
                    //     }
                    // });
                    return(
                        <><pre>{code}</pre></>
                    )
                })}
            </div>
        </div>
    </div>
    );
}

export default CodeComponent;