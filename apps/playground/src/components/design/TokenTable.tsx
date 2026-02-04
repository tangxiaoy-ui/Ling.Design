import React from "react"
import { TokenItem, ColorToken } from "../../data/tokens"

interface TokenTableProps {
  tokens: TokenItem[] | ColorToken[]
  columns?: string[]
}

export const TokenTable: React.FC<TokenTableProps> = ({ tokens, columns = ["Name", "Value", "Description"] }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-ling-gray-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-ling-gray-50 text-ling-gray-600">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-3 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ling-gray-100">
          {tokens.map((token, index) => (
            <tr key={index} className="hover:bg-ling-gray-50/50">
              <td className="px-4 py-3 font-medium text-ling-gray-900">{token.name}</td>
              <td className="px-4 py-3 font-mono text-ling-gray-600">{token.value}</td>
              <td className="px-4 py-3 text-ling-gray-500">
                {(token as any).description || (token as any).variable || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
