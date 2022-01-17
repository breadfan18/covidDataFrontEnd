export default function UserAccount(props) {
    return (
        <>
            <h1>UserAccount Page...</h1>
            <div className="userAccContainer">
                <div className="leftCont">
                    <div id="imgContainer" style={{ marginLeft: '0' }}>
                        <img src="https://i.imgur.com/f89UZyv.png" alt="" style={{
                            borderRadius: '10px', 
                            width: '95.5%', 
                            height: '200px',
                            border: '5px solid black'
                        }} />
                    </div>
                    <div id="userDetails">
                        <label for="">First Name</label>
                        <p className="eachUserDetail">Jackson</p>
                        <label for="">Last Name</label>
                        <p className="eachUserDetail">Teller</p>
                        <label for="">Email Address</label>
                        <p className="eachUserDetail">notp@tellermorrow.com</p>
                        <label for="">Password</label>
                        <p className="eachUserDetail">********</p>
                        <input type="submit" value="Edit Account" id="editAccBtn" />
                    </div>
                </div>
                <div className="rightCont">
                    <div>Display User Covid Saved Data list things stuff etc..</div>
                </div>
            </div>
        </>
    )
}