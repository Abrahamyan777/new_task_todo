import { useEffect, useState } from 'react';
import css from './pros.module.css'



const Pros = () => {
    const [list1, setList1] = useState([
        {
            id: 1,
            title: "It's relly testy"
        },
        {
            id: 2,
            title: "Making a new entry"
        },
        {
            id: 3,
            title: ""
        }
    ]);
    const [list2, setList2] = useState([
        {
            id: 1,
            title: "Make me fat"
        },
        {
            id: 2,
            title: "Too expensive"
        },
        {
            id: 3,
            title: ""
        }
    ]);
    
    const [edit1, setEdit1] = useState("");
    const [newValue1, setNewValue1] = useState('')

    const handleClick = (id, title, index) => {
        setEdit1(id)
        setNewValue1(title)
    }
    const handleChange = (e, index ) => {
        setNewValue1(e.target.value)

        let lol = e.target.value;
        list1[index].title = lol

        if ((list1[list1.length - 1].title != "" && list1.length < 10)) {
            setList1([...list1, {
                id: list1[list1.length - 1].id + 1,
                title: ''
            }])
        }
        fil1(e, index);
    }

    const fil1 = (e, index) => {
        if (e.target.value == '') {
            let x = list1.filter((el) => list1.indexOf(el) != index)
            setList1(x)
        }
    }


    const handleIf1 = () => {
        if (edit1 != '' && newValue1 != "") {
            setEdit1('')
        }
    }


    const [edit2, setEdit2] = useState("");
    const [newValue2, setNewValue2] = useState('')

    const handleClick2 = (id, title) => {
        setEdit2(id)
        setNewValue2(title)
    }
    const handleChange2 = (e, id, index) => {
        setNewValue2(e.target.value)

        let lol1 = e.target.value;
        list2[index].title = lol1

        if ((list2[list2.length - 1].title != "" && list2.length < 10)) {
            setList2([...list2, {
                id: list2[list2.length - 1].id + 1,
                title: ''
            }])
        }
        fil2(e, index);
    }
    const handleIf2 = () => {
        if (edit2 != '') {
            setEdit2('')
        }
    }

    const fil2 = (e, index) => {
        if (e.target.value == '') {
            let x2 = list2.filter((el) => list2.indexOf(el) != index)
            console.log(x2);
            setList2(x2)

        }
    }

console.log(list2);

    return (
        <div className={css.prosWrapper}>
            <div className={css.prosContainer}>
                <div className={css.prosInner}>
                    <div className={css.prosHeader}>
                        <h1>Should I eat at McDonalds?</h1>
                    </div>

                    <div className={css.main}>
                        <div className={css.leftContent} onClick={() => handleIf1()}>
                            <div className={css.leftContentHeader}>
                                <h1>PROS</h1>
                            </div>
                            <div className={css.prosItems} >
                                <ol>
                                    {
                                        list1.map(({ id, title }, index) => {
                                            return edit1 == id ?
                                                <li key={index} ><input onClick={(e) => e.stopPropagation()}
                                                    onChange={(e) => handleChange(e, index)}
                                                    value={newValue1} /></li>
                                                : <li key={index} onClick={() => handleClick(id, title, index)}>{title}</li>
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className={css.rightContent} onClick={() => handleIf2()}>
                            <div className={css.rightContentHeader} >
                                <h1>CONS</h1>
                            </div>
                            <div className={css.consItems} >
                                <ol>
                                    {
                                        list2.map(({ id, title }, index ) => {
                                            return edit2 == id ?
                                                <li key={id}><input onClick={(e) => e.stopPropagation()}
                                                    onChange={(e) => handleChange2(e, id,index )}
                                                    value={newValue2}
                                                />
                                                </li>
                                                : <li key={id} onClick={() => handleClick2(id, title)}>{title}</li>
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Pros;