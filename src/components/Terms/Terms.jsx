import React from "react"

const Terms = () => {
  return (
    <div className="w-full pb-40 overflow-x-hidden bg-background pt-32">
      <div className="max-w-7xl mx-auto pt-4">
        <h1 className="text-white text-3xl font-semibold">Terms of Service</h1>
        <p className="text-white mt-10 opacity-50">
          <span className="">
            By purchasing a membership you agree to the following:
          </span>
          <ul className="list-inside list-disc space-y-2 pt-5">
            <li className="">
              Once a membership is purchased you&apos;re ineligible for a refund
              due to the fact that it&apos;s an electronic purchase. As per{" "}
              <span className="font-medium">
                Consumer Protection (Distance Selling) Regulations 2000
              </span>
            </li>
            <li className="">
              That your purchase is final and you will not initiate any form of
              chargeback through your payment provider(s).
            </li>
            <li className="">
              We reserve the right to change prices of our product at any time.
            </li>
            <li className="">
              We reserve the right to revoke your membership at any time for any
              reason.
            </li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Terms
