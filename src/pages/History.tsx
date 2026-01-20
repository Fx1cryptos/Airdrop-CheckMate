import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { History as HistoryIcon, Clock, ExternalLink } from 'lucide-react'

export function History() {
  const historyData = [
    { id: '1', date: '2024-03-15', address: '0x742d...444e', chain: 'Ethereum', action: 'Scan', found: 2, value: '$450.00' },
    { id: '2', date: '2024-03-10', address: '0x742d...444e', chain: 'Base', action: 'Scan', found: 1, value: '$120.00' },
    { id: '3', date: '2024-03-05', address: '8xJ2...m9Qp', chain: 'Solana', action: 'Scan', found: 0, value: '$0.00' },
    { id: '4', date: '2024-02-28', address: '0x742d...444e', chain: 'Arbitrum', action: 'Scan', found: 3, value: '$890.00' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-2">Wallet History</h1>
          <p className="text-muted-foreground">Review your past scans and tracked addresses.</p>
        </div>
        <div className="text-right">
           <Badge variant="outline" className="gap-2 px-3 py-1">
              <Clock className="w-3 h-3" />
              Last scan: 2 hours ago
           </Badge>
        </div>
      </div>

      <Card className="glass border-white/10">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <HistoryIcon className="w-5 h-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-white/10">
                <TableHead>Date</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Network</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Airdrops Found</TableHead>
                <TableHead className="text-right">Est. Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historyData.map((item) => (
                <TableRow key={item.id} className="border-white/5 hover:bg-white/5 transition-colors">
                  <TableCell className="font-medium">{item.date}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{item.address}</TableCell>
                  <TableCell>{item.chain}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-normal">{item.action}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className={item.found > 0 ? "text-green-500 font-bold" : "text-muted-foreground"}>
                      {item.found}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-bold text-primary">{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="mt-12 grid md:grid-cols-3 gap-6">
         <Card className="glass border-white/10 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="pt-6">
               <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Total Value Detected</p>
               <p className="text-3xl font-bold">$1,460.00</p>
            </CardContent>
         </Card>
         <Card className="glass border-white/10">
            <CardContent className="pt-6">
               <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Protocols Scanned</p>
               <p className="text-3xl font-bold">52</p>
            </CardContent>
         </Card>
         <Card className="glass border-white/10">
            <CardContent className="pt-6">
               <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Success Rate</p>
               <p className="text-3xl font-bold text-green-500">12.4%</p>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}
