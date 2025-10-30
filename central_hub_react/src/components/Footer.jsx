export default function Footer() {

    return <div className="footer">
        <table id="table">
            <td id="tableCol">
                <u><b><h3>Developed By:</h3></b></u>
                <ul>
                    <li>Sl0th-Silence - Data Collection & Planning</li>
                    <li>Smitty - Frontend & Backend Development</li>
                </ul>
                
            </td>
            <td id="tableCol">
                <u><b><h3>Tools Used:</h3></b></u>
                <p>Desktop App:</p>
                <ul>
                    <li>Electron</li>
                    <li>React + Vite</li>
                </ul>
                
                <p>Data Collection:</p>
                <ul>
                    <li>Python</li>
                </ul>
            </td>
        </table>
    </div>
}