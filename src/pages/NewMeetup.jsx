import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
      const history = useHistory();

      const addMeetupHandler = (meetupData) => {
            fetch(
                  "https://react-getting-started-2381b-default-rtdb.firebaseio.com/meetups.json",
                  {
                        method: "POST",
                        body: JSON.stringify(meetupData),
                        headers: {
                              "Content-Type": "application/json",
                        },
                  }
            ).then(() => {
                  history.replace("/");
            });
      };

      return (
            <section>
                  <h2>Add New Meetup</h2>
                  <NewMeetupForm onAddMeetup={addMeetupHandler} />
            </section>
      );
};

export default NewMeetup;
