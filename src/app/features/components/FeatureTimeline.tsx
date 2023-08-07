"use client";

import { Timeline } from "flowbite-react";
import { Chip } from "@nextui-org/react";

export default function FeatureTimeline() {
  return (
    <Timeline className="py-8 my-8 lg:my-12 lg:py-18">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Aug 2023</Timeline.Time>
          <Timeline.Title>Launch Of MVP</Timeline.Title>
          <Timeline.Body>
            <ul className="max-w-md space-y-1 text-gray-500 mt-2 list-disc list-inside dark:text-gray-400">
              <li>
                Chrome extension that allows you to seamlessly Rate Websites 🌟
              </li>
              <li>
                Web portal that allows you to explore your complete rating
                history 👀
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Sep 2023</Timeline.Time>
          <Timeline.Title>
            Planned Features{" "}
            <Chip className="ml-2" color="warning" variant="bordered" size="sm">
              Coming Soon
            </Chip>
          </Timeline.Title>
          <Timeline.Body>
            <ul className="max-w-md space-y-1 text-gray-500 mt-2 list-disc list-inside dark:text-gray-400">
              <li>
                Blogs that will cover the most important topics around rating
                and review. New tools and tips!
              </li>
              <li>
                Chrome browser extension will allow you to write text based
                reviews.
              </li>
              <li>
                and we are planning more. Tweet to us if you have any feedback.
                😄
              </li>
            </ul>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
