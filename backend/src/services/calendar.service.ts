const getAllCalendars = async () => {
  try {
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/calendars",
      {
        headers: {
          Authorization: `Bearer REDACTED`,
        },
      },
    );
    return response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getAllEvents = async () => {
  try {
    const response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
      headers: {
        Authorization: `Bearer REDACTED`,
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createEvent = async () => {
  const event = {
    type: "singleInstance",
    body: { contentType: "text", content: "blabla" },
    bodyPreview: "petit blabla",
    subject: "titre blabla",
  };
  const response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
    body: JSON.stringify(event),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer REDACTED`,
    },
  });
  console.log(response.json());
};

export default { getAllCalendars, getAllEvents, createEvent };
