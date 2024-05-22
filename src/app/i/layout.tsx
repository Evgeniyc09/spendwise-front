import type { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashboardLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<DashboardLayout>{children}</DashboardLayout>
		</div>
	)
}
