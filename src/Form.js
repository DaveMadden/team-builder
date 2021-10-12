import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        console.log(`onChange, update with: ${name} ${value}`);
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        console.log(`onSubmit: ${evt}`);
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="put yo name bro"
                    />
                </label>
                <br/>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="put yo email bro"
                    />
                </label>
                <br/>
                <label>Role
                    <select role={values.role} name="role" onChange={onChange}>
                        <option value="">-- select role bro --</option>
                        <option value="blacksmith">blacksmith</option>
                        <option value="cooper">cooper</option>
                        <option value="wheelwright">wheelwright</option>
                        <option value="farmer">farmer</option>
                    </select>
                </label>
                <div>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}