import { JsonArray, JsonItem, JsonObject } from "@/components/json";
import { getData } from "@/utils/getData";

export default async function Home() {
  const data = await getData();

  return (
    <div className="wrapper overflow-auto flex flex-col justify-center items-center grow-1 gap-[20px] p-[40px]">
      <img className="avatar" src="/images/avatar.webp" alt="avatar"style={{
        width: "140px",
        borderRadius: "100%"
      }} />
      <div className="bio flex flex-col items-center">
        <span className="name primary-text text-[20px]">Вячеслав</span>
        <span className="username secondary-text text-[14px]">$diominvd</span>
      </div>
      <p className="description primary-text max-w-[360px] text-[14px] text-center">
        {data.description}
      </p>
      <div className="json__wrapper w-[300px] flex flex-col items-start grow-1 text-[14px]">
        <JsonItem label="location" value={data.location} />
        <JsonItem label="organization" value={data.organization} />
        <JsonItem label="specialization" value={data.specialization} />
        <JsonItem label="experience" value={data.experience} />
        <JsonObject label="skills">
          {Object.entries(data.skills).map(([key, value]) => (
            <JsonArray key={key} label={key}>
              {(value as string[]).map((item: string) => (
                <JsonItem value={item} key={item} />
              ))}
            </JsonArray>
          ))}
        </JsonObject>
        <JsonObject label="projects">
          {Object.entries(data.projects).map(([key, value]) => (
            <JsonItem key={key} label={key} value={
              <a className="underline" href={value as string}>Follow the link</a>
            }/>
          ))}
        </JsonObject>
      </div>
      <div className="footer flex flex-row justify-center gap-[32px] text-[14px]">
        <a className="secondary-text underline" href="https://github.com/diominvd">GitHub</a>
        <a className="secondary-text underline" href="https://t.me/diominvd">Telegram</a>
      </div>
    </div>
  );
}
