import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({id, logo}) => (
        <div key={id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 glow`}>
          <img src={logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;