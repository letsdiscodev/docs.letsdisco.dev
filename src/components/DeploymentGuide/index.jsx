import React from "react";
import CodeBlock from "@theme/CodeBlock";
import PageTop from "./_PageTop.mdx";
import PageMiddle from "./_PageMiddle.mdx";

export default function DeploymentGuide({ repo, exampleProjectName }) {
  return (
    <>
      <PageTop repo={repo} />

      <CodeBlock language="bash">
        {`disco projects:add \\
    --name ${exampleProjectName} \\
    --github USERNAME/REPONAME \\
    --domain DOMAINNAME`}
      </CodeBlock>

      <PageMiddle />
    </>
  );
}
