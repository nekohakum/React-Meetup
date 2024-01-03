import Card from "../ui/Card";
import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ meetup }) => {
      const favoritesCtx = useContext(FavoritesContext);

      const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);

      const toggleFavoritesStatusHandler = () => {
            if (itemIsFavorite) {
                  favoritesCtx.removeFavorite(meetup.id);
            } else {
                  favoritesCtx.addFavorite({
                        id: meetup.id,
                        title: meetup.title,
                        description: meetup.description,
                        image: meetup.image,
                        address: meetup.address,
                  });
            }
      };

      return (
            <li className={classes.item}>
                  <Card>
                        <div className={classes.image}>
                              <img src={meetup.image} alt={meetup.title} />
                        </div>
                        <div className={classes.content}>
                              <h3>{meetup.title}</h3>
                              <address>{meetup.address}</address>
                              <p>{meetup.description}</p>
                        </div>
                        <div className={classes.actions}>
                              <button onClick={toggleFavoritesStatusHandler}>
                                    {itemIsFavorite
                                          ? "Remove From Favorites"
                                          : "To Favorites"}
                              </button>
                        </div>
                  </Card>
            </li>
      );
};

export default MeetupItem;
