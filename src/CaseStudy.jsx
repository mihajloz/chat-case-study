import hero from "./assets/chat.png";

const CaseStudy = () => {
  return (
    <div className="max-w-[1000px] px-[100px]">
      <img src={hero} alt="hero" />
      <h1 className="font-bold text-[35px]">
        Case Study - Building the EventScout App
      </h1>
      <a
        href="https://github.com/mihajloz/chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white/90 text-black px-6 py-2 rounded-full hover:bg-yellow-400 duration-200">
          Visit App
        </button>
      </a>
      <h2 className="heading">Project Overview</h2>
      <p>
        The React Native Mobile Chat App project aimed to develop a chat
        application for mobile devices using React Native, Expo and Google
        Firestore Database. The app&apos;s objective was to provide users with a
        seamless chat interface where they are able to send messages, and share
        images and locations.
      </p>
      <p className="mt-4">
        This case study explores the challenges addressed, methods employed and
        key features implemented.
      </p>

      <h2 className="heading">Problem Statement</h2>
      <p>
        Building mobile apps requires time and resources due to different
        platform requirements. With React Native, this challenge is addressed,
        as it provides a framework to build cross platform apps.
      </p>

      <h2 className="heading">Project Context</h2>
      <p>
        The context of the project shows the shift towards mobile-centric
        applications React Native is a cross-platform framework for building
        mobile apps to offer a near native mobile experience. There are many
        benefits of using React Native, such as there being only one codebase to
        maintain for different mobile operating systems.
      </p>

      <h2 className="heading">Project Duration</h2>
      <p>8 weeks</p>
      <h2 className="heading">Project Team</h2>
      <p>Lead Developer: Mihajlo Z.</p>
      <p>Collaborators: James G. M. (Mentor), Jonathan N. (Tutor)</p>

      <h2 className="heading">Tools, Skills, and Methodologies</h2>
      <ul className="list-disc ml-6">
        <li>
          <span className="font-bold">Tools:</span> React Native, Expo, Google
          Firestore, Google Firebase, Gifted Chat
        </li>
      </ul>

      <h2 className="heading">Features and Requirements</h2>
      <h2 className="heading-2">User Stories</h2>
      <ul className="list-decimal ml-6 mb-5">
        <li>Users can enter a chat room to quickly start conversations.</li>
        <li>
          Users can send text messages, images, and share their current
          location.
        </li>
        <li>Offline access allows users to read messages at any time.</li>
      </ul>

      <h2 className="heading-2">Key Features</h2>
      <ul className="list-decimal ml-6 mb-5">
        <li>Customizable chat screen with background color selection.</li>
        <li>Chat interface with input field and submit button.</li>
        <li>Sending images and location data.</li>
        <li>Online and offline storage of chat conversations.</li>
      </ul>

      <h2 className="heading-2">Technical Requirements</h2>
      <ul className="list-decimal ml-6 mb-5">
        <li>Developed using React Native and Expo.</li>
        <li>Styled according to provided screen designs.</li>
        <li>Chat conversations stored in Google Firestore Database.</li>
        <li>
          Anonymous user authentication via Google Firebase authentication.
        </li>
        <li>Local storage of chat conversations.</li>
        <li>Storage of images in Firebase Cloud Storage.</li>
      </ul>

      <h2 className="heading">Building the App</h2>
      <h2 className="heading-2 mb-2">
        1. Set up the development environment for React Native and Expo.
      </h2>
      <h2 className="heading-2 mb-2 ">
        2. Create the app&apos;s layout using native UI components and style the
        start screen.
      </h2>
      <h2 className="heading-2 mb-2">
        3. Build the chat screen and implement chat functionality using the
        Gifted Chat library.
      </h2>
      <h2 className="heading-2 mb-2">
        4. Authenticate users anonymously with Firebase. Store conversations in
        Google Firestore Database.
      </h2>
      <h2 className="heading-2 mb-2">
        5. Implement local storage of chats using asyncStorage for offline
        access. Authenticate users, store chat messages in Firestore, and on the
        device when online.
      </h2>
      <h2 className="heading-2 mb-2">
        6. Enable image selection from the device&apos;s library and camera.
        Store images in Firebase Cloud Storage and send them via Gifted Chat.
      </h2>
      <h2 className="heading-2 mb-2">
        7. Implement location data sharing via Gifted Chat.
      </h2>
      <h2 className="heading-2 mb-12">
        8. Apply accessibility considerations to app design and development.
      </h2>

      <h2 className="heading">Challenges Faced</h2>
      <h2 className="heading-2">Cross-Platform Development and Testing</h2>
      <p>
        Ensuring consistent performance on both Android and iOS. Certain aspects
        of the app work well with one OS, while not working at all with the
        other. This made it necessary to test the app on both operating systems
        to ensure consistent performance.
      </p>
      <h2 className="heading-2">Real-Time Data Sync</h2>
      <p>
        Overcoming challenges in synchronizing data between devices in
        real-time.
      </p>
      <h2 className="heading-2">Offline Functionality</h2>
      <p className="mb-10">
        Implementing offline access for users to read messages without an
        internet connection.
      </p>

      <h2 className="heading">Conclusion</h2>
      <p>
        The React Native Mobile Chat App successfully met its objectives,
        providing users with a feature-rich chat experience, staying consistent
        regardless of the platform it&apos;s used on. By leveraging React
        Native, Expo, and Google Firestore Database, the project demonstrated
        expertise in JavaScript mobile development. The emphasis on
        accessibility, real-time data synchronization, and offline functionality
        showcased a commitment to delivering a user-centric and technically
        robust solution.
      </p>
    </div>
  );
};

export default CaseStudy;
