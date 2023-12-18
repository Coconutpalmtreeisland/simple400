import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const RepleWrite = () => {
    const [reple, setReple] = useState("");
    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            reple: reple,
            // userSlice에서 가져오기
            uid: user.uid
        }

        axios
            .post("/api/reple/submit", body);
    }

    return (
        <div>
            <form>
                <input style={{ border: "1px solid #000" }}
                    type='text'
                    value={reple}
                    onChange={(e) => {
                        setReple(e.currentTarget.value)
                    }}
                />
                <button
                    onClick={(e) => {
                        SubmitHandler(e);
                    }}
                >댓글쓰기</button>
            </form>
        </div>
    )
}

export default RepleWrite