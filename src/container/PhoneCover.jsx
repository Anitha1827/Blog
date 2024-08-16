import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./PhoneCover.css"

const PhoneCover = () => {
  return (
    <div className="text-black">
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className="text-pink-600 font-bold"
      >
        Phone Cover
      </Typography>
      <Typography>
        <h1 className="font-bold">Phone Cover</h1>
        <br />
        <br />
        I changed my phone cover to her pic (her pic means not her, but Actress
        Sshivada, because she looks like her)
        <br />
        <Image
          src="https://10clove.wordpress.com/wp-content/uploads/2022/12/whatsapp-image-2022-12-11-at-7.58.48-pm.jpeg"
          alt="cover"
          width={600}
          height={600}
        />
        <br />
        <br />
        Intake of alcohol has risen. Previously, 1 beer was enough to get high,
        now 2 or 3 minimum. The weird thing is, I started to cry immediately
        after the 2nd beer. Don’t know what is happening.
        <br />
        Ready stocks of beer/GIN are kept in the car as a reserve. Previously,
        my car was always neat. Now it’s turned into a “Moving Bar.”
        <br />
        Spoiling my health sometimes makes me happy; in a way, it can be helpful
        for death.
        <br />
        Messages from her have totally stopped. She no longer sees my WhatsApp
        status. I cry for that. When she comes online late at night, I use to
        keep a “Good Night” DP in my WhatsApp. An indirect way of messaging her
        like “Please sleep and good night.” She will be online, but I don’t know
        if she saw it.
        <br />
        I also stopped messaging her since I don’t know in what situation she is
        or what kind of thinking she would have.
        <br />
        The only good thing is, I’m not blocked. Every night before closing my
        eyes, after waking up, the VERY FIRST thing I do is check her WhatsApp.
        If there is a DP, I would think, “Huh! I’m still unblocked.”
        <br />
        Her previous birthday was not celebrated well; I was very drunk. So, I
        did a “Re-celebration” of her birthday. Is there any rule or limit to
        how many times to celebrate? I will do it “n” times.
        <br />
        <br />
        <Image
          src="https://10clove.wordpress.com/wp-content/uploads/2022/12/whatsapp-image-2022-12-22-at-2.30.06-am.jpeg"
          width={600}
          height={600}
          alt="celebration"
        />
        <br />
        <br />
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <iframe
            src="https://drive.google.com/file/d/1bNr-cPQ5cFwMt-RjFNFTUFNMH_o-wXiO/preview"
            width="640"
            height="480"
            allow="autoplay"
            className="rounded-lg shadow-lg"
          />
        </div>
        <br />
        <br />
        Planned to go to Kerala again this Sunday, with my mask off, walking in
        the streets she would have walked, breathing the air where she would
        have breathed, everything. Won’t inform her, not in status, just visit,
        sit, cry, drink, walk, and come. Enough to survive.
        <br />
        <br />
        Every morning, I started to pray very deeply for her. Manifestation kind
        of thing. I hope one day I will meet her. January 2023, her wedding day
        is coming up. More to celebrate!! To be continued.
        <br />
        <br />
      </Typography>
    </div>
  );
};

export default PhoneCover;
