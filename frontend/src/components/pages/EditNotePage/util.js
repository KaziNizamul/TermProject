import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

class EditNoteUtility {
  static notifyBySnS = ({ noteId = "" }) => {
    const snsClient = new SNSClient({
      region: import.meta.VITE_AWS_REGION,
      credentials: {
        accessKeyId: import.meta.VITE_AKID,
        secretAccessKey: import.meta.VITE_SAK,
      },
    });
    const params = {
      Message: `Note with ID ${noteId} has been updated.`,
      TopicArn: import.meta.SNS_TOPIC_ARN,
    };
    const command = new PublishCommand(params);
    snsClient.send(command, (err, data) => {
      if (err) {
        console.error("Error publishing SNS message", err);
      } else {
        console.log("SNS message published successfully", data);
      }
    });
  };
}

export default EditNoteUtility;
