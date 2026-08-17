import styles from "./ProfileCard.module.css";
export default function ProfileCard({ name, role, highlighted }) {
    return (

        <div
            className={`${styles.card} shadow-md`}
            style={{
                backgroundColor: highlighted ? "#fff7cc" : "white",
            }}
        >
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{role}</p>
        </div>
    );

}