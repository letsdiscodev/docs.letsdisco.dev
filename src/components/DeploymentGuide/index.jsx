import React from "react";
import CodeBlock from "@theme/CodeBlock";
import PageTop from "./_PageTop.mdx";
import PageMiddle from "./_PageMiddle.mdx";
import PageBottom from "./_PageBottom.mdx";

export default function DeploymentGuide({ children, repo, exampleProjectName }) {
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

      <hr/>

      {children ? children : null}
      {children ? <hr/> : null}

      <PageBottom />
    </>
  );
}
