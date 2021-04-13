import React from "react";

function Solutions() {
  return (
    <div>
      <section
        class="content-section bg-primary text-white text-center"
        id="services"
      >
        <div class="container">
          <div class="content-section-heading">
            <h3 class="text-secondary mb-0">ShippingEasy</h3>
            <h2 class="mb-5">Solutions Work</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-screen-smartphone"></i>
              </span>
              <h4>
                <strong>ColourPop</strong>
                <p></p>$70M Online Cosmetic Retailer
              </h4>
              <p class="text-faded mb-0">
                The Story: Kylie Jenner Holiday Box
                <p></p>The Challenge: Client feared over 10,000 duplicate labels
                already printed/shipped. Batches Duplicate Printing & Inability
                to split Bundles. <p></p>
                <strong>The personal solution:</strong> We flew to California
                overnight, received some data from our engineers, and we began
                hand counting shipping labels at 4AM. We quickly found a way to
                reconcile batches with batch ID's from our data to be able to
                spot check the batches instead of counting each label. This
                saved us hours and eventually saved them tens of thousands of
                dollars. <p></p>
                <strong>The software solution:</strong> We quickly moved forward
                with a backlogged feature request for removing (splitting) items
                from "all" orders.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-pencil"></i>
              </span>
              <h4>
                <strong>Baking Memories 4 Kids</strong> <p></p> Non-Profit
                Organization Sends Terminally Ill Children to Disneyland
                <p></p>
              </h4>

              <p class="text-faded mb-0">
                The Story: 4500 orders overnight after today show appearance.{" "}
                <p></p>But what did we actually do? The personal solution:
                Because Frank called late in the day (we typically close around
                5PM CST) I began helping him set up his printers and devices
                over the phone as he was a new ShippingEasy customer. I
                eventually taught him how to print his first batch of shipping
                labels. He was thrilled at the speed but still extremely
                nervous. I eventually left the office and called him from my
                cell. I began walking him through the process of creating more
                batches and continuing the operation. We worked together through
                the night to get him in a position for success. <p></p>
                <strong>The software solution:</strong> Unfortunately Frank had
                a Dymo 4XL. They are great printers but he needed to print over
                4500 shipping labels. Dymo label rolls are around 220 labels per
                roll. Furthermore, our software limitation was that we could
                only print batches of 200 orders at time. I began printing
                batches from my end (cloud based) that were sent to his printer.
                He was able to get the labels off the printer, switch the rolls,
                while I prepared the next batch. Product Enhancements: Because
                of this experience and many like it we increased our batch sizes
                to 500 and allowed for many other direct printing methods. For
                instance, direct or instant printing.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-like"></i>
              </span>
              <h4>
                <strong>Woom Bikes</strong>
              </h4>
              <strong>
                "We want as many children as possible to love to ride their bike
                - that is our mission." - Marcus Ihlenfeld (Founder)
              </strong>
              Woom Bikes USA is a wonderful company. Their mission is simple and
              honest. "We want as many children as possible to love to ride
              their bike - that is our mission." Biggest pain point: They drop
              ship most of their non-bicycle products via drop shipping from
              Amazon FBA / or UPS in Kentucky. Nearly 100% of their orders
              contain a bicycle + one other item that is not shipped from
              Austin. This required tedious manual splitting every morning. The
              human solution: I spent a lot of time working with their
              Operation's Manager, Billy Flores, to solve many of their shipping
              dilemmas. Whether it was shipping rules or product catalog issues;
              we were able to tackle anything and everything without leaving the
              ShippingEasy product. The software solution: we had a very long
              standing feature request regarding automated split orders based on
              SKU and it did not make it onto our quarterly roadmaps. Billy's
              team needed this feature because they had orders everyday that
              needed to be shipped from different locations. When you spend time
              on site with a client, a friend, another human you can really
              start to feel the pain a small feature enhancement would relive.
              As I spoke with a dozen clients a day I knew this was an ongoing
              dilemma for many of our customers. I championed this to make it
              quickly onto our product roadmap and many of our clients benefited
              from the feature.
            </div>
            <div class="col-lg-3 col-md-6">
              <span class="service-icon rounded-circle mx-auto mb-3">
                <i class="icon-mustache"></i>
              </span>
              <h4>
                <strong>Operation Care & Comfort</strong>
              </h4>
              <p class="text-faded mb-0">
                Operation Care and Comfort has hundreds of volunteers meet at
                Angel Stadium of Annaheim to prepare care packages for active
                military overseas. The human solution: I flew to Annaheim and
                stayed overnight so I could be up early to be a part of the
                team. This was one of the most positive and uplifting
                experiences in my life. I watched hundreds of people from all
                walks of life band together to assemble and ship hundreds of
                care packages. From the United States Postal Service to the
                volunteer workers I saw such joy in each and everyone’s eyes.
                The power of groups and teams is undeniable. If you would like
                to see pictures from this experience please email me and I will
                provide a google link! The software solution: Their biggest
                issue shipping overseas is address validation. Most shipping
                software uses some form of address validation. The military
                address format can be very finicky for software and we
                eventually enhanced our software through more robust APIs and
                other Address Validation Software.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
