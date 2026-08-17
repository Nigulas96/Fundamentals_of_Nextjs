export default function Card({ highlighted }) {

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: highlighted ? "yellow" : "white",
                border: "1px solid #ccc",
                borderRadius: "10px",
            }}

        >
            <p>This is a card</p>
        </div>
    );

}