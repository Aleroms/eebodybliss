import { Timeline } from "primereact/timeline";

function TimelineComponent() {
  const events = [
    {
      status: "Free Consultation",
      content:
        "This is a 15-20 minute appointment where we discuss your goals and realistic expectations that body sculpting can acheive.",
    },
    {
      status: "Session",
      content:
        "Depending on which session selected the duration will be different.",
    },
    {
      status: "Follow-up",
      content: "A follow-up after the appointment (if needed).",
    },
  ];
  return (
    <div className=" m-6 surface-0 text-center">
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">How this </span>
        <span className="text-primary">Works</span>
      </div>
      <Timeline
        value={events}
        className="m-auto"
        style={{ maxWidth: "700px" }}
        opposite={(item) => item.status}
        content={(item) => (
          <small className="text-color-secondary">{item.content}</small>
        )}
      />
    </div>
  );
}
export default TimelineComponent;
